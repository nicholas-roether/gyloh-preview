import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

const styles = createStyles({
    cardWrapper: {
        display: "flex"
    }
});

export interface CardDisplayProps  {
    maxPerPage: number
}

interface CardDisplayState {

}

class CardDisplay extends React.Component<CardDisplayProps & WithStyles<typeof styles>> {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.cardWrapper}>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(CardDisplay);