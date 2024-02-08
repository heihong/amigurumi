import { createAction, props } from '@ngrx/store';  


export const increment = createAction(
    'Increment action'
  );

  export const decrement = createAction(
    'Decrement action'
  );


  export const reset = createAction(
    'reset'
  );
