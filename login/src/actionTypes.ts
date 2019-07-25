type TIncrementAction = {
    type: "INCREMENT";
};

type TDecrementAction = {
    type: "DECREMENT";
};


type TResetAction = {
    type: "RESET";
};

type TNosequeAction = {
    type: "COSA";
};

type TSetAction = {
    type: "SET_TOKEN",
    token: string
};

export type TAction = TIncrementAction | TDecrementAction | TResetAction | TNosequeAction | TSetAction;
