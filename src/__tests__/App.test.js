// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
  test('selected number of events by the user are rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput =
      within(NumberOfEventsDOM).queryByRole('textbox');

    await userEvent.type(NumberOfEventsInput, '{backspace}{backspace}10');

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole('listitem');
    expect(allRenderedEventItems.length).toEqual(10);
  });
});