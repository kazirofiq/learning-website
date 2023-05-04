import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
function App() {
  const queryClient = new QueryClient()
  return (
    <div>
       <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
          <Toaster></Toaster>
       </QueryClientProvider>
      
    </div>
  );
}

export default App;
