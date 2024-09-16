import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f7fc;
    color: #333;
    line-height: 1.6;
    padding: 20px;
  }

  h1 {
    text-align: center;
    color: #3f51b5;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #3f51b5;
    color: white;
  }

  td {
    background-color: #fff;
  }

  input {
    padding: 8px;
    margin-top: 10px;
    width: 95%;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  input:focus {
    outline: none;
    border-color: #3f51b5;
    box-shadow: 0 0 5px rgba(63, 81, 181, 0.5);
  }

  tr:nth-child(even) {
    background-color: #f4f7fc;
  }

  tr:hover {
    background-color: #e0e7ff;
    cursor: pointer;
  }
`;

export default GlobalStyle;
