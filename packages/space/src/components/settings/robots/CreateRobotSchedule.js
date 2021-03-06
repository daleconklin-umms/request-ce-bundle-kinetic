import React from 'react';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { ROBOT_SCHEDULES_FORM_SLUG } from '../../../redux/modules/settingsRobots';
import { CoreForm } from 'react-kinetic-core';
import { toastActions } from 'common';

const globals = import('common/globals');

const CreateRobotScheduleComponent = ({
  robot,
  match,
  handleLoaded,
  handleCreated,
  handleError,
}) => (
  <div className="page-container page-container--robots">
    <div className="page-panel page-panel--scrollable page-panel--robots-content">
      <div className="page-title">
        <div className="page-title__wrapper">
          <h3>
            <Link to="/">home</Link> /{` `}
            <Link to="/settings">settings</Link> /{` `}
            <Link to="/settings/robots">robots</Link> /{` `}
            <Link to={`/settings/robots/${robot.id}`}>
              {robot.values['Name']}
            </Link>{' '}
            /{` `}
          </h3>
          <h1>New Schedule</h1>
        </div>
      </div>

      <div>
        <CoreForm
          datastore
          form={ROBOT_SCHEDULES_FORM_SLUG}
          loaded={handleLoaded}
          created={handleCreated}
          error={handleError}
          globals={globals}
          values={{ 'Robot ID': robot.values['Robot ID'] }}
        />
      </div>
    </div>
  </div>
);

export const handleLoaded = props => form => {
  const cancelButton = form.find('button.cancel-schedule')[0];
  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      props.push(`/settings/robots/${props.robot.id}/schedules`);
    });
  }
  const deleteButton = form.find('button.delete-schedule')[0];
  if (deleteButton) {
    deleteButton.remove();
  }
};

export const handleCreated = props => response => {
  props.addSuccess(
    `Successfully created schedule (${response.submission.values['Name']})`,
    'Schedule Created!',
  );
  props.push(
    `/settings/robots/${props.robot.id}/schedules/${response.submission.id}`,
  );
};

export const handleError = props => response => {
  props.addError(response.error, 'Error');
};

export const mapStateToProps = state => ({
  robot: state.space.settingsRobots.robot,
});

export const mapDispatchToProps = {
  push,
  addSuccess: toastActions.addSuccess,
  addError: toastActions.addError,
};

export const CreateRobotSchedule = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    handleLoaded,
    handleCreated,
    handleError,
  }),
)(CreateRobotScheduleComponent);
