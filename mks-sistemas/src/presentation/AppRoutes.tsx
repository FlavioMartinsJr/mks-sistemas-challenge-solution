import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProductsListUseCase } from "../data/useCases";
import { AxiosHttpClient } from "../infrastructure/implementations";

import { Home } from "./pages";
import { Header } from "./pages/header/header";
import { Footer } from "./pages/footer/footer";

export function AppRoutes(){

  const productsListuseCase = new ProductsListUseCase(new AxiosHttpClient());

  const Layout = () => {
    return (
      <div>
        <header id="header">
          <Header/>
        </header> 

        <main id="root">
          <Home productsListUseCase={productsListuseCase}/>
        </main> 

        <footer id="footer">
          <Footer/>
        </footer>
      </div>
    );
  };


  return(
    <BrowserRouter>
      <Routes>
        
        <Route path="/*" element={<Layout/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}