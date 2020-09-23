import { createStyles, Fab, Theme, withStyles, WithStyles, withTheme, WithTheme, withWidth, WithWidth } from "@material-ui/core";
import { ChevronLeft as LeftIcon, ChevronRight as RightIcon } from "@material-ui/icons";
import React from "react";
import { CSSTransition } from "react-transition-group";

const styles = (theme: Theme) => createStyles({
    displayWrapper: {
        margin: theme.spacing(4, 0),
        position: "relative",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center"
    },
    contentWrapper: {
        display: "flex",
        margin: theme.spacing(0, -5),
        height: "100%",
        overflow: "hidden",
        flexGrow: 1
    },
    cardWrapper: {
        position: "relative",
        top: 0,
        left: 0,
        height: "100%",
        display: "flex",
        flexGrow: 1
    },
    pageWrapper: {
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
        }),
        [theme.breakpoints.up("sm")]: {
            justifyContent: "space-between"
        }
    },
    button: {
        zIndex: 100
    }
});

export interface CardDisplayProps  {
    numCards: {
        xs: number,
        sm: number,
        md: number,
        lg: number,
        xl: number
    },
    height?: number
}

interface CardDisplayState {
    index: number,
    prevIndex: number,
    initial: boolean
}

class CardDisplay extends React.Component<CardDisplayProps & WithStyles<typeof styles> & WithWidth & WithTheme, CardDisplayState> {
    state = {index: 0, prevIndex: -1, initial: true}

    get numCards() {
        return React.Children.count(this.props.children);
    }

    get numPages() {
        return Math.ceil(this.numCards / this.props.numCards[this.props.width]);
    }

    private prevPage(pageSize: number) {
        this.setState(prev => {
            if(prev.index > 0) return {index: prev.index - pageSize, prevIndex: prev.index, initial: false};
            return null;
        })
    }

    private nextPage(pageSize: number) {
        this.setState(prev => {
            if(prev.index < this.numCards - 1) return {index: prev.index + pageSize, prevIndex: prev.index, initial: false}
            return null;
        });
    }

    private adjustIndex(index: number): number {
        return index - index % this.props.numCards[this.props.width];
    }

    componentDidUpdate() {
        const newIndex = this.adjustIndex(this.state.index)
        const newPrevIndex = this.adjustIndex(this.state.prevIndex)
        if(newIndex !== this.state.index || newPrevIndex !== this.state.prevIndex)
            this.setState({index: newIndex, prevIndex: newPrevIndex}); 
    }

    render() {
        const { classes, width, theme } = this.props;
        const numCards = this.props.numCards[width];
        const breakpoints = theme.breakpoints.values as {[key: string]: number};
        const breakpointNames = Object.keys(breakpoints);
        const topBreakpoint = breakpointNames.find((v, i) => v === "lg" || breakpointNames[i - 1] === width);
        if(!topBreakpoint) return;
        const widthNum = breakpoints[topBreakpoint];

        // TODO sliding animations
        const leftToRight: {[key: string]: any} = {
            entering: { marginLeft: -widthNum},
            entered: { marginLeft: 0 },
            exiting: { marginLeft: 0 },
            exited: { marginLeft: widthNum }
        }

        const rightToLeft: {[key: string]: any} = {
            entering: { marginLeft: widthNum},
            entered: { marginLeft: 0 },
            exiting: { marginLeft: 0 },
            exited: { marginLeft: -widthNum }
        }

        return (
            <div className={classes.displayWrapper} style={{height: this.props.height || 400}}>
                <Fab className={classes.button} color="secondary" disabled={this.state.index <= 0} onClick={() => this.prevPage(numCards)}>
                    <LeftIcon />
                </Fab>
                <div className={classes.contentWrapper}>
                    <div className={classes.cardWrapper}>
                            {
                                this.state.prevIndex !== this.state.index &&
                                <CSSTransition in={false} timeout={0} appear={true} key={"page-" + this.state.prevIndex.toString()}>
                                    {state => (
                                        <div className={classes.pageWrapper} style={
                                            (this.state.index < this.state.prevIndex ? leftToRight : rightToLeft)[state]
                                        }>
                                            {React.Children.toArray(this.props.children).slice(this.state.prevIndex, this.state.prevIndex + numCards)}
                                        </div>
                                    )}
                                </CSSTransition>
                            }
                            <CSSTransition in={true} timeout={0} appear={!this.state.initial} key={"page-" + this.state.index.toString()}>
                                {state => (
                                    <div className={classes.pageWrapper} style={
                                        (this.state.index < this.state.prevIndex ? leftToRight : rightToLeft)[state]
                                    }>
                                        {React.Children.toArray(this.props.children).slice(this.state.index, this.state.index + numCards)}
                                    </div>
                                )}
                            </CSSTransition>
                    </div>
                </div>
                <Fab className={classes.button} color="secondary" disabled={this.state.index + numCards > this.numCards - 1} onClick={() => this.nextPage(numCards)}>
                    <RightIcon />
                </Fab>
            </div>
        );
    }
}

export default withStyles(styles)(withTheme(withWidth()(CardDisplay)));