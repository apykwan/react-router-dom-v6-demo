import { useRouteError, Link } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occurred';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'not Found';
        message = 'Could not find resorce or page';
    }

  return (
    <>
        <MainNavigation />
        <PageContent title={title}>
            <p>{message}</p>
            {error.status === 404 && <Link to=".." relative="path">GO BACK</Link>}
        </PageContent>
    </>
  );
}

export default ErrorPage