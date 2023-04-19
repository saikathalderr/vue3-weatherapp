import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import clickOutside from '../clickOutsideEvent';

describe('clickOutside directive', () => {
  test('should call the provided method when a click is detected outside the element', () => {
    const mockMethod = vi.fn();
    const Component = {
      template: '<div v-click-outside="mockMethod"></div>',
      directives: {
        'click-outside': clickOutside,
      },
      setup() {
        return { mockMethod };
      },
    };

    const wrapper = mount(Component);

    // Simulate a click inside the element
    wrapper.trigger('click');
    expect(mockMethod).not.toHaveBeenCalled();

    // Simulate a click outside the element
    document.body.click();
    expect(mockMethod).toHaveBeenCalled();

    // Unmount the component and check that the event listener is removed
    wrapper.unmount();
    document.body.click();
    expect(mockMethod).toHaveBeenCalledTimes(1);
  });
});
