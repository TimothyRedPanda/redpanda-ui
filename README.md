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

```tsx
import { Button } from 'ui-redpanda';
import "ui-redpanda/dist/style.css";

const export App = () => {
    return <Button onClick={() => {console.log("Your function here")}}>Click Me</Button>
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