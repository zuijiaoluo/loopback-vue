// server-entry
import Vue from 'vue';
import router from './router';
import app from './client';

// the default export should be a function
// which will receive the context of the render call
export default function(context) {
  // set router's location
  router.push('/');
  return new Promise((resolve, reject) => {
    resolve(app);
  });
};
