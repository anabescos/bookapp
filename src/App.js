import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoute from 'components/routes/PublicRoute';
import {
  BOOKS,
  BOOK_ADD,
  BOOK_DELETE,
  BOOK_DETAIL,
  BOOK_EDIT,
  CATEGORIES,
  CATEGORY_DELETE,
  CATEGORY_DETAIL,
  CATEGORY_EDIT,
  LOGIN,
  LOGOUT
} from 'config/routes/paths';
import BookAdd from 'views/BookAdd';
import BookDelete from 'views/BookDelete';
import BookDetail from 'views/BookDetail';
import BookEdit from 'views/BookEdit';
import Books from 'views/Books';
import Categories from 'views/Categories';
import CategoryDelete from 'views/CategoryDelete';
import CategoryDetail from 'views/CategoryDetail';
import CategoryEdit from 'views/CategoryEdit';
import Login from 'views/Login/Login';
import Logout from 'views/Logout';
import { AuthContextProvider } from 'contexts/authContext';

export default function App() {
  return (
    <AuthContextProvider>

      <div>
        <h1>Bookapp!</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<PrivateRoute />}>
              <Route path={BOOK_ADD} element={<BookAdd />} />
              <Route path={BOOK_DELETE} element={<BookDelete />} />
              <Route path={BOOK_DETAIL} element={<BookDetail />} />
              <Route path={BOOK_EDIT} element={<BookEdit />} />
              <Route path={BOOKS} element={<Books />} />
              <Route path={CATEGORIES} element={<Categories />} />
              <Route path={CATEGORY_DELETE} element={<CategoryDelete />} />
              <Route path={CATEGORY_DETAIL} element={<CategoryDetail />} />
              <Route path={CATEGORY_EDIT} element={<CategoryEdit />} />
              <Route path={LOGOUT} element={<Logout />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path={LOGIN} element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}
