import React from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import ArcButton from '../ui/elements/arc-button';

function WizardFlow(props) {
    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                <Grid item xs={6}>
                    {props.previouspage && <ArcButton variant="contained" color="default" onClick={props.previouspage}>
                        <i className="material-icons">skip_previous</i>Previous
                    </ArcButton>}
                    {props.modify && <ArcButton variant="contained" color="secondary" onClick={props.modify}>
                        <i className="material-icons">edit</i>Edit
                    </ArcButton>}
                </Grid>
                <Grid container item xs={6} justify="flex-end">                    
                        {props.saveforlater && <Hidden smDown><ArcButton variant="text" color="default" onClick={props.saveforlater}>
                            <i className="material-icons">save_alt</i>Save for later
                        </ArcButton></Hidden>}
                    &nbsp;&nbsp;
                    {props.nextpage && <ArcButton lighttext variant="contained" color="primary" onClick={props.nextpage}>
                        <i className="material-icons">skip_next</i>Next
                    </ArcButton>}
                    {props.review && <ArcButton lighttext variant="contained" color="primary" onClick={props.review}>
                        <i className="material-icons">assignment</i>Review
                    </ArcButton>}
                    {props.submit && <ArcButton variant="contained" color="primary" onClick={props.submit}>
                        <i className="material-icons">check</i>Submit
                    </ArcButton>}
                </Grid>
            </Grid>
            <br />
            <Grid container xs={12} justify="center">
                <Typography variant="headline">{props.headline}</Typography>
            </Grid>
        </div>
    )
}

WizardFlow.propTypes = {
    previouspage: PropTypes.func,
    nextpage: PropTypes.func,
    submit: PropTypes.func,
    saveforlater: PropTypes.func
};

export default WizardFlow;