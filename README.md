# Red Panda UI

## Getting Started

1) Install Red Panda UI into your React project.

```bash
npm i ui-redpanda
```
2) Import your desired component and the styles.

```typescript
import { Button } from 'ui-redpanda';
import "ui-redpanda/dist/style.css";
```

3) Use the component.

## Button example

```tsx
import { Button } from 'ui-redpanda';
import "ui-redpanda/dist/style.css";

const export App = () => {
    return <Button>Click Me</Button>
}
```
### Optional className and onClick to customise the click event and styles.

```tsx
const export App = () => {
    return <Button className="custom className" onClick={() => {console.log("Custom onClick")}}>Click Me</Button>
}
```

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
4) Run Storybook to view the components in the browser.

```bash
npm run storybook
```