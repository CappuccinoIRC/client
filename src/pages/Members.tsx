import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Nav, NavItem, Sidebar } from '../components';

import './Members.scss';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

export interface IMembers {
}

type Member = { id: number, name: string, group: number };
type Group = { id: number, name: string };

/*
    TODO:
    - Editing user.
    - Kicking user.
    - Banning user.
    - Deleting user.
 */
export const Members: FC<IMembers> = ({}) => {
    const [group, setGroup] = useState({id: 1, name: 'Users'} as Group);
    const [members, setMembers] = useState([] as Member[]);

    return (
        <>
            <Router>
                <Sidebar>
                    <Nav>
                        <NavItem onClick={() => setGroup({id: 3, name: 'Administrators'})}>
                            <span>Administrators</span>
                        </NavItem>

                        <NavItem onClick={() => setGroup({id: 2, name: 'Moderators'})}>
                            <span>Moderators</span>
                        </NavItem>

                        <NavItem onClick={() => setGroup({id: 1, name: 'Users'})}>
                            <span>Users</span>
                        </NavItem>
                    </Nav>
                </Sidebar>

                <div className={'container-fluid'}>
                    <Typography variant="h5">{group.name}</Typography>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {members.length > 0 && members.filter((member) => member.group === group.id).map((member) => (
                                    <TableRow>
                                        <TableCell>{member.id}</TableCell>
                                        <TableCell>{member.name}</TableCell>
                                    </TableRow>
                                )) || <TableRow><TableCell>There are currently no users.</TableCell></TableRow>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Router>
        </>
    );
};