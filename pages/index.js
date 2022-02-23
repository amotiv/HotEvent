import Header from './Header'
import {login,selectUser} from "../reducers/userSlice";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../firebase';
import Login from './login';
import { useRouter } from 'next/router';
import Body from './body';

export default function Home() {
    const Router = useRouter();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // the user is logged in
          dispatch(
            login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            })
          );
        }
      });
    }, [dispatch]);
  return (
    <div> 
      
      <Header />
      <Body />
    </div>
  )
}