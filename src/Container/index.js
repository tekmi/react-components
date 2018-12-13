import React from "react";
import ContainerBase from 'react-bulma-components/lib/components/container'

export const Container = (props) => (
    <ContainerBase {...props}>
        {props.children}
    </ContainerBase>
);
