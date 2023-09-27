import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifynumberOfEvents.feature');

defineFeature(feature, test => {

  test('Default number is 32 when not specified.', ({ given, when, then }) => {
    let AppComponent;
    let eventList;
    given('the user has not specified or filtered any number,', () => {
      AppComponent = render(<App />);

    });

    when('the user sees the list,', async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    then(/^the default number of displayed events should be (\d+).$/, (arg0) => {
      expect(eventList.length).toEqual(32);

    });
});

test('Change the number of events displayed.', ({ given, when, then }) => {
  let AppComponent;
  given('the user has events displayed,', async () => {
    AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    await waitFor(() => {
      const eventList = within(AppDOM).queryAllByRole('listitem');
      expect(eventList[0]).toBeTruthy();
    });
  });

  when('the user chooses to change the number of events displayed,', async () => {
    const button = AppComponent.queryByTestId('numberOfEventsInput');

    await userEvent.type(button, '{backspace}{backspace}10');
  }
);

  then('the number of events displayed should update to the selected number.', () => {
    const AppDOM = AppComponent.container.firstChild;
    const eventList = within(AppDOM).queryAllByRole('listitem');
    expect(eventList.length).toEqual(10);
  }
);
});
});