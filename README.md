# Redux
Redux is *the* **state management tool** that helps you write applications that  **behave consistently**, run in different environments (client, server, and native), and are **easy to test**.

## How it works
Think of Redux as a wheel that represents the change in the central state of your app and it effects on the components rendered on the screen. That wheel consists of **Actions**, **Reducers** and a **Store**

### Actions
An action is just a function that wraps the incoming data in an action-object, that data will then be called *payload*. Actions also have *type* which tells the reducer what to do
```js
export const addPostAction = (newPost) => {
    return {
        type: 'ADD_POST',
        payload: newPost
    }
}
```
Actions are the trigger that kick-starts the cycle of Redux.  You can simply dispatch an action that can carry the data you want to your store via the useDispatch() hook. 
```js
const dispatch = useDispatch();

const  handleSubmit = (event) => {
	event.preventDefault();
	dispatch(addPostAction(post));
};
```
___
### Reducers
A reducer is just a function that receives the action as an argument and thus it has access to the action's *type* and *payload* and so it recreates the central state according to the action
```js
export const postsReducer = (state, action) => {
	if (action.type === 'ADD_POST') {
		return [...state, action.payload]
	}
}
```

___

### Store
The store is the central state that can be created using some redux methods and must be provided to the root  of the application

```js
import { Provider } from  "react-redux";
import { createStore } from  "redux";
import { composeWithDevTools } from  "redux-devtools-extension";
import { tasksReducer } from  "./store/reducers";

export  const  store = createStore(tasksReducer, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);