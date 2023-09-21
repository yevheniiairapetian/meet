import Event from '../components/Event';
import { render } from '@testing-library/react';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

const mockEvent = mockData[0];

describe('<Event /> Component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={mockEvent} />);
  });

  test('has the events title', () => {
    const title = EventComponent.queryByText(mockEvent.summary);
    expect(title).toBeInTheDocument();
  });

  test('has the events time', () => {
    const time = EventComponent.queryByText(mockEvent.created);
    expect(time).toBeInTheDocument();
  });

  test('has the events location', () => {
    const location = EventComponent.queryByText(mockEvent.location);
    expect(location).toBeInTheDocument();
  });

  test('has the button "show details"', () => {
    const button = EventComponent.queryByText('Show Details');
    expect(button).toBeInTheDocument();
  });

  test('by default event details are hidden', () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });

  test('show details after user clicks button "show details"', async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  test('hide details after user clicks button "hide details"', async () => {
    const button = EventComponent.queryByText('Show Details');
    const eventDOM = EventComponent.container.firstChild;
    await userEvent.click(button);

    const hideButton = EventComponent.queryByText('Hide Details');
    await userEvent.click(hideButton);

    const details = eventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });
});