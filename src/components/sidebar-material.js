import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SidebarData } from '../data/sidebar-data';
import { switchPageAction } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      left: '25%'
    },
}));

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
    const redirectUrl = useSelector(state => state.switchPage);
    const dispatch = useDispatch();
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(true);
    const { title, childs, Icon, onClick: onClickProp } = item;

    let expandIcon;

    function toggleCollapse() {
        setCollapsed(prevValue => !prevValue);
    }

    function onClick(e, item) {
        if (Array.isArray(childs)) {
            toggleCollapse();
        } else {
            dispatch(switchPageAction(item.path));
        }

        if (onClickProp) {
            onClickProp(e, item);
        }
    }

    if (Array.isArray(childs) && childs.length) {
        expandIcon = !collapsed ? (
            <ExpandLessIcon
                className={
                    "sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded"
                }
            />
        ) : (
            <ExpandMoreIcon className="sidebar-item-expand-arrow" />
        );
    }

    if (redirectUrl && redirectUrl.length > 0) {
        history.push(redirectUrl);
    }

    return (
        <>
            <ListItem className="sidebar-item" onClick={(e) => onClick(e, item) } button dense {...rest} disabled={item.isAllowed ? false : true}>
                <div style={{ paddingLeft: depth * depthStep }} className="sidebar-item-content">
                    {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
                    <div className="sidebar-item-text">{title}</div>
                </div>

                {expandIcon}
            </ListItem>

            <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                {Array.isArray(childs) ? (
                    <List disablePadding dense>
                        {childs.filter((o) => o.isShowed).map((subChild, index) => (
                        <React.Fragment key={`${subChild.id}${index}`}>
                            {subChild === "divider" ? (
                            <Divider style={{ margin: "6px 0" }} />
                            ) : (
                            <SidebarItem
                                depth={depth + 1}
                                depthStep={depthStep}
                                item={subChild}
                            />
                            )}
                        </React.Fragment>
                        ))}
                    </List>
                ) : null}
            </Collapse>
        </>
    )
}

const Sidebar = ({ depthStep, depth, expanded }) => {
    const classes = useStyles();

    return (
        <div className="sidebar">
            <img alt="Viko Wijaya" src="https://store.avana.asia/common/images/avana_logo_orange.svg" style={{width: '50%', height: '10%', marginLeft: '25%'}}/>

            <Avatar alt="Viko Wijaya" src="https://media-exp1.licdn.com/dms/image/C5103AQEi0WMqmFU-8Q/profile-displayphoto-shrink_400_400/0/1581486522233?e=1627516800&v=beta&t=nRuwQEZE4UFCAe_Tq25Pk3QGVkyp5TU7yo7EM64YryE" className={classes.large} />
            
            <br />

            <h2 style={{marginLeft: '25%'}}>Viko Wijaya</h2>

            <br />

            <List disablePadding dense>
                {SidebarData.filter((o) => o.isShowed).map((val, index) => (
                    <React.Fragment key={`${val.id}${index}`}>
                        {val === "divider" ? (
                        <Divider style={{ margin: "6px 0" }} />
                        ) : (
                        <SidebarItem
                            depthStep={depthStep}
                            depth={depth}
                            expanded={expanded}
                            item={val}
                        />
                        )}
                    </React.Fragment>
                ))}
            </List>
        </div>
    )
}

export default Sidebar
