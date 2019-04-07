import React from 'react';

import SimpleList from './components/SimpleList';
import ComplexList from './components/ComplexList';
import ListComponents from './components/ListComponents';
import ListWithAddItem from './components/ListWithAddItem';
import ListWithUpdateItem from './components/ListWithUpdateItem';
import ListWithRemoveItem from './components/ListWithRemoveItem';
import NestedList from './components/NestedList';
import ListWithoutKey from './components/ListWithoutKey';
import ListScrollToItem from './components/ListScrollToItem';
import ListScrollToItemOutside from './components/ListScrollToItemOutside';

const App = () => (
  <div>
    <h1>List Examples in React</h1>

    <h2>"Simple List"-Examples</h2>
    <SimpleList />

    <h2>"Complex List"-Examples</h2>
    <ComplexList />

    <h2>"List with multiple Components"-Examples</h2>
    <ListComponents />

    <h2>"List with add Item"-Examples</h2>
    <ListWithAddItem />

    <h2>"List with update Item"-Examples</h2>
    <ListWithUpdateItem />

    <h2>"List with remove Item"-Examples</h2>
    <ListWithRemoveItem />

    <h2>"List without Key and thus Bug"-Example</h2>
    <ListWithoutKey />

    <h2>"List with nested List"-Example</h2>
    <NestedList />

    <h2>"List Scroll to Item"-Examples</h2>

    <h3>ListScrollToItem from within ...</h3>
    <ListScrollToItem />
    <hr />

    <h3>ListScrollToItem from outside ...</h3>
    <ListScrollToItemOutside />
    <hr />
  </div>
);

export default App;
