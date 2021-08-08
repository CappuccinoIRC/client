import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Nav, NavItem, Sidebar } from '../components';

import './Members.scss';
import {
    Badge,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';

export interface IMembers {
}

type Member = { id: number, name: string, group: number };
type Group = { id: number, name: string, default?: boolean };

/*
    TODO:
    - Editing user.
    - Kicking user.
    - Banning user.
    - Deleting user.
 */
export const Members: FC<IMembers> = ({}) => {
    const [groups, setGroups] = useState([] as Group[]);
    const [members, setMembers] = useState([] as Member[]);
    const [selectedGroup, setSelectedGroup] = useState(undefined as Group | undefined);

    useEffect(() => {
        setGroups([
            {
                id: 1,
                name: 'User',
                default: true
            },
            {
                id: 2,
                name: 'Moderator'
            },
            {
                id: 3,
                name: 'Administrator'
            }
        ]);

        setSelectedGroup({ id: 1, name: 'User', default: true });
    }, []);

    return (
        <>
            <Router>
                <Sidebar>
                    <Nav>
                        {groups.sort((a, b) => b.id - a.id).map((group) => (
                            <NavItem onClick={() => setSelectedGroup(group)} selected={selectedGroup && group.id === selectedGroup.id}>
                                <span>{group.name}</span>
                            </NavItem>
                        ))}
                    </Nav>
                </Sidebar>

                <div className={'container-fluid'}>
                    {selectedGroup && (
                        <>
                            <Typography variant="h5">{selectedGroup.name} {selectedGroup.default ? <Badge color="primary" badgeContent={'Default'} style={{ marginLeft: '25px' }} /> : ''}</Typography>

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Name</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {members.length > 0 && members.filter((member) => member.group === selectedGroup.id).map((member) => (
                                            <TableRow>
                                                <TableCell>{member.id}</TableCell>
                                                <TableCell>{member.name}</TableCell>
                                            </TableRow>
                                        )) || <TableRow><TableCell>There are currently no users.</TableCell></TableRow>}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ) || (
                        <span>There is currently no group selected.</span>
                    )}
                </div>
            </Router>
        </>
    );
};