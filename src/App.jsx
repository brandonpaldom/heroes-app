import { AuthProvider } from './auth';
import AppRouter from './router/AppRouter';

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
