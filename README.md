Visit [Red Panda Studio](https://red-panda.studio/redpandaui) for visual examples.

### GitHub

1) Clone the project down.

```bash
git clone https://github.com/TimothyRedPanda/redpanda-ui.git
```
2) Move into the correct directory.

```bash
cd ./redpanda-ui
```
3) Install the dependencies and build the project.

```bash
npm install
```
4) Run Storybook to view full UI components documentation.

```bash
npm run storybook
```

# Getting Started

1) Install Red Panda UI into your React project.

```bash
npm i ui-redpanda@latest
```
2) Import your desired component and the styles.

```typescript
import { Button /* Or the component of your choice */ } from 'ui-redpanda';
import "ui-redpanda/dist/style.css";
```

3) Use the component.

```typescript
import { Button, Switch, Label, Input, Textbox } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

const App = () => {
  return (
    <div>
      <Button>Default</Button>
      <Switch />
      <Label label="Your label here"/>
      <Input type="text" sanitized/>
      <Textbox name="Your text box" placeholder="Type here..." />
    </div>
  );
};

export default App;
```

### Components

Each component has a `className` prop if you wish to add your own class. Just to allow you to reference it in `CSS` if you wish. Remember though any styles you apply in `CSS` will have to have the `!important` tag.

```css

.yourClass {
  /* !important is needed to override the default styles. */
  background-color: #fff !important;
}

```

## Button

### Props

The Button component accepts the following props:

* `children` (ReactNode, required): The content to be displayed inside the button.

* `onClick` (function, optional): The function to be called when the button is clicked.

* `variant` (string, optional): The style variant, can be `contained`, `outlined` or `disabled`.

* `size` (string, optional): Size of the button, can be `small`, `base`(default size) or `large`.


## Switch

### Props

The Switch component accepts the following props:

* `onClick` (function, optional): The function to be called when the switch is toggled.

* `variant` (string, optional): The style variant, can be `live` or `disabled`.

## Label

### Props

The Label component accepts the following props:

* `label` (string, required): The actual text the label says.

* `size` (string, optional): Text size, can be `small`, `base`(default size) or `large`.


## Input

### Props

The Input component accepts the following props:

* `type` (string, required): The type of the input, e.g., `text`, `checkbox`, `radio`, `number` or `date`.

* `defaultValue` (string, optional): The default value of the input.

* `className` (string, optional): Additional class names for styling the input.

* `onChange` (function, optional): The function to be called when the input value changes.

* `onClick` (function, optional): The function to be called when the input is clicked.

* `sanitized` (boolean, optional): If you simply - `<Input sanitized/>`. Then any text input will be sanitized. If you wish to do your own sanitization then simply leave this off.

## Textbox
### Props
The Textbox component accepts the following props:

* `rows` (number, optional): The number of `rows` for the textarea. Default is `4`.
* `cols` (number, optional): The number of columns for the textarea. Default is `50`.
* `name` (string, optional): The name attribute of the textarea. Default is "textbox".
* `className` (string, optional): Additional class names for styling the textarea.
* `onChange` (function, optional): The function to be called when the textarea value changes.
* `sanitized` (boolean, optional): If set to true, the input will be sanitized to prevent special characters, HTML, and other potentially dangerous inputs.
* `placeholder` (string, optional): The placeholder text for the textarea. Default is "Text area...".



## Sanitization 
Can be toggled on `Textbox` and `Input` components -
  * Escape special characters.
  * HTML tags.
  * Script tags.
  * Event handlers.
  * CSS expressions.