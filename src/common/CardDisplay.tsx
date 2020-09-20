import { createStyles, Fab, withStyles, WithStyles, withWidth, WithWidth } from "@material-ui/core";
import { ChevronLeft as LeftIcon, ChevronRight as RightIcon } from "@material-ui/icons";
import React from "react";
import theme from "../theme";

const styles = createStyles({
    displayWrapper: {
        margin: theme.spacing(4, 0),
        position: "relative",
        top: 0,
        left: 0
    },
    contentWrapper: {
        position: "absolute",
        boxSizing: "border-box",
        padding: theme.spacing(0, 2),
        height: "100%",
        width: "100%"
    },
    cardWrapper: {
        position: "relative",
        top: 0,
        left: 0,
        height: "100%",
    },
    pageWrapper: {
        display: "flex",
        position: "absolute",
        justifyContent: "space-between",
        height: "100%",
        width: "100%"
    },
    buttonWrapper: {
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
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
    page: number,
    prevPage: number
}

class CardDisplay extends React.Component<CardDisplayProps & WithStyles<typeof styles> & WithWidth, CardDisplayState> {
    state = {page: 0, prevPage: 0}

    get numPages() {
        return Math.ceil(React.Children.count(this.props.children) / this.props.numCards[this.props.width]);
    }

    private prevPage() {
        this.setState(prev => {
            if(prev.page > 0) return {page: prev.page - 1, prevPage: prev.page};
        })
    }

    private nextPage() {
        this.setState(prev => {
            if(prev.page < this.numPages - 1) return {page: prev.page + 1, prevPage: prev.page}
        });
    }

    render() {
        const { classes, width } = this.props;
        let numCards = this.props.numCards[width];
        let offset = this.state.page * numCards;
        let prevOffset = this.state.prevPage * numCards;

        // TODO sliding animations
        const slideInLeft = {
            entering: {marginLeft: -theme.breakpoints.values[width]},
            entered: {marginRight: 0}
        }

        return (
            <div className={classes.displayWrapper} style={{height: this.props.height || 400}}>
                <div className={classes.contentWrapper}>
                    <div className={classes.cardWrapper}>
                        <div className={classes.pageWrapper}>
                           {React.Children.toArray(this.props.children).slice(prevOffset, prevOffset + numCards)}
                        </div>
                        <div className={classes.pageWrapper}>
                            {React.Children.toArray(this.props.children).slice(offset, offset + numCards)}
                        </div>
                    </div>
                </div>
                <div className={classes.buttonWrapper}>
                    <Fab color="secondary" disabled={this.state.page <= 0} onClick={() => this.prevPage()}>
                        <LeftIcon />
                    </Fab>
                    <Fab color="secondary" disabled={this.state.page >= this.numPages - 1} onClick={() => this.nextPage()}>
                        <RightIcon />
                    </Fab>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(withWidth()(CardDisplay));