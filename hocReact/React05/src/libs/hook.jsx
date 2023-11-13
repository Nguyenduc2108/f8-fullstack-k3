export const useContext2 = (Context) => {
  console.log(Context);
  return Context._currentValue;
  // return (
  //   <Context.Consumer>
  //     {(context) => {
  //       console.log(context);
  //     }}
  //   </Context.Consumer>
  // );
};
