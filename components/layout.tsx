import dynamic from 'next/dynamic';
import { CircularProgress, Container } from '@mui/material';

const LazyScene = dynamic(() => import('./scene'), {
    ssr: false,
    loading: () => <CircularProgress />
});

const Layout = ({ children }) => (
    <Container maxWidth="sm" sx={{ height: '100%' }}>
        <LazyScene />
        {children}
    </Container>
)

export default Layout;