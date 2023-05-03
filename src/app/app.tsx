// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { LoginPage } from '@/src/components/pages/LoginPage';
import { HomePage } from '@/src/components/pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ChatCard /> */}
    </>
  );
}

export default App;
