# React Concept

## What's React?

- def: JavaScript library for building user interface compose of components
- react renders UI
- displays UI to the user
- responds to events

- invented by Facebook in 2013

### Pros:
- strong community
-  many data about React
- less errors
- can built React, Electron, React Native
- very popular

## Framework vs Library

### Framework:
- ex) Angular:
    - if framework update=> doesn't work
    - must follow framework
    - cons: takes time to learn bc we have to learn all

    ### Library
    - ex) React
    - pros: easy to learn


    ## Components

    ### Review
    - What is React?

    component is pure javaScript & represents a unit of UI function
    - ex) button

    ex)
    root
    /     \
    content         navbar logo
    / /     \
    article article    logo    button


    ### Characteristics of Components
    - isolated
    - idenpendent
    - reusable
    - highly cohesivie building block for UIs loosely coupled w / other components

    ### DOM Tree (Document Object Model)
    - DOM TREE represent as HTML tag
    - ex) <>

    ## Component Coding

    How does component looks like?
    ```
    import React from 'react';

    class LikedButton extends Component {
                                         state={
                                                likes: 0,
                                                };

                                         render() {
                                                   return < button >
                                                   {this.state.likes}
                                                   < /button > ;                                                }

                                         }

    export default LikeButton

    ```
    The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class.

    if state changes=> render function changes
    if parents component changes=> all other changes


    ```
    import React from 'react';

    // create 'LikeButton' child of parent 'Component' (prototypical OOP)
    class LikedButton extends Component {
                                         <!-- object that stores this component's data - ->
                                         state={
                                                likes: 0,
                                                };

                                         <!-- How to shows in UI for the user
                                         looks like HTML(it is JSX format) - ->
                                         render() {
                                                   return < button >
                                                   {this.state.likes}
                                                   < /button >;                     }

                                         }

    export default LikeButton

    ```
