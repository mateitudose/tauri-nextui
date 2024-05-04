import {Button, Spacer} from "@nextui-org/react";

export default function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Welcome to Tauri NextUI App</h1>
            <p>This is a basic template for your application.</p>
            <Spacer y={2} />
            <Button color="primary">Click Me</Button>
        </div>
    );
}
