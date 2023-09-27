import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('Collapse event details by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the user opens the app', () => {
      AppComponent = render(<App />);
    });


    when('the user receives a full list of events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems =
          within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    }
  );

    then('all events should be collapsed by default', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

test('Expand an event to see details.', ({ given, when, then }) => {
  let AppComponent;
  given('the user gets a list of events,', async () => {
    AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    await waitFor(() => {
      const eventList = within(AppDOM).queryAllByRole('listitem');
      expect(eventList[0]).toBeTruthy();
    });
  });

  when('the user selects an event\'s details,', async () => {
    const button = AppComponent.queryAllByText('Show Details')[0];

      await userEvent.click(button);
  });

  then('the details of the chosen event will be displayed.', () => {
    const EventDOM = AppComponent.container.firstChild;
    const details = EventDOM.querySelector('.details');
    expect(details).toBeInTheDocument();
  });
});


test('Collapse an event to hide details.', ({ given, when, then }) => {
  let AppComponent;
  let button;
  given('the user sees event details,', async () => {
    AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    await waitFor(() => {
      const eventList = within(AppDOM).queryAllByRole('listitem');
      expect(eventList[0]).toBeTruthy();
    });

    button = AppComponent.queryAllByText('Show Details')[0];
    await userEvent.click(button);

    const EventDOM = AppComponent.container.firstChild;
    const details = EventDOM.querySelector('.details');
    expect(details).toBeInTheDocument();
  });

  when('the user presses a button to hide event details,', async () => {
    await userEvent.click(button);

  });

  then('the details of that event will be hidden.', () => {
    const EventDOM = AppComponent.container.firstChild;
    const details = EventDOM.querySelector('.details');
    expect(details).not.toBeInTheDocument();
  });
});
});