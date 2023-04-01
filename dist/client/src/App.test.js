"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var react_redux_1 = require("react-redux");
var store_1 = require("./app/store");
var App_1 = __importDefault(require("./App"));
test('renders learn react link', function () {
    var getByText = (0, react_2.render)(<react_redux_1.Provider store={store_1.store}>
      <App_1.default />
    </react_redux_1.Provider>).getByText;
    expect(getByText(/learn/i)).toBeInTheDocument();
});
