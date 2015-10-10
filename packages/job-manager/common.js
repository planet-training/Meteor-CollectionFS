/**
 * @public
 * @type Object
 */
FS.JobManager = {
  _registeredJobTypes: [],
  _registeredJobWorkers: []
};
var jobCollectionName = 'cfs_jobManager' + (process.env.NODE_ID || '_local_');
// TODO: Allow custom options
FS.JobManager.jobCollection =  new JobCollection(jobCollectionName);
