import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Arriendo from './pages/Modulos/Arriendo';
import Taller from './pages/Modulos/Taller';
import GestionDocumental from './pages/Modulos/GestionDocumental';
import Cotizaciones from './pages/Modulos/Cotizaciones';
import Compras from './pages/Modulos/Compras';
import Ventas from './pages/Modulos/Ventas';
import Empresas from './pages/Mantenedores/Empresas';
import Insumos from './pages/Mantenedores/Insumos';
import Vehiculos from './pages/Mantenedores/Vehiculos';
import Bodegas from './pages/Mantenedores/Bodegas';
import CentroCostos from './pages/Mantenedores/CentroCostos';
import Usuarios from './pages/Mantenedores/Usuarios';
import Inventario from './pages/Modulos/Inventario';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Inicio | Polosur" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/arriendo"
          element={
            <>
              <PageTitle title="Arriendo | Polosur" />
              <Arriendo />
            </>
          }
        />
        <Route
          path="/inventario"
          element={
            <>
              <PageTitle title="Inventario | Polosur" />
              <Inventario />
            </>
          }
        />
        <Route
          path="/taller"
          element={
            <>
              <PageTitle title="Taller | Polosur" />
              <Taller />
            </>
          }
        />
        <Route
          path="/gestiondocumental"
          element={
            <>
              <PageTitle title="Gestion Documental | Polosur" />
              <GestionDocumental />
            </>
          }
        />
        <Route
          path="/cotizaciones"
          element={
            <>
              <PageTitle title="Cotizaciones | Polosur" />
              <Cotizaciones />
            </>
          }
        />
        <Route
          path="/compras"
          element={
            <>
              <PageTitle title="Compras | Polosur" />
              <Compras />
            </>
          }
        />
        <Route
          path="/ventas"
          element={
            <>
              <PageTitle title="Ventas | Polosur" />
              <Ventas />
            </>
          }
        />
        <Route
          path="/empresas"
          element={
            <>
              <PageTitle title="Empresas | Polosur" />
              <Empresas />
            </>
          }
        />
        <Route
          path="/insumos"
          element={
            <>
              <PageTitle title="Insumos | Polosur" />
              <Insumos />
            </>
          }
        />
        <Route
          path="/vehiculos"
          element={
            <>
              <PageTitle title="Vehiculos | Polosur" />
              <Vehiculos />
            </>
          }
        />
        <Route
          path="/bodegas"
          element={
            <>
              <PageTitle title="Bodegas | Polosur" />
              <Bodegas />
            </>
          }
        />
        <Route
          path="/centrocostos"
          element={
            <>
              <PageTitle title="Centro de Costos | Polosur" />
              <CentroCostos />
            </>
          }
        />
        <Route
          path="/usuarios"
          element={
            <>
              <PageTitle title="Usuarios | Polosur" />
              <Usuarios />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
