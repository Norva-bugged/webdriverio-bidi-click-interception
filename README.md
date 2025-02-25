# WebDriver BiDi Click Interception Tests

## Overview

This repository contains WebDriverIO test cases designed to validate the behavior of WebDriver BiDi when handling click interception scenarios. The tests ensure that clicks are properly registered on visible elements while verifying how overlays affect user interactions.

## Test Scenarios

The test suite includes the following cases:

### Clicking an Uncovered Button

- Ensures a button is clickable when there are no obstructions.
- Removes any existing overlay before attempting the click.
- Verifies that the button click event is properly logged.

### Failing to Click a Covered Button

- Attempts to click a button covered by an overlay.
- Catches the expected error indicating the click was intercepted.
- Confirms that no button click event is logged.

### Detecting an Overlay Click

- Clicks on an overlay element.
- Checks if the overlay click event is logged correctly.

## Setup

```sh
npm install
npm test
```
