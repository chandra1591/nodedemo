const core = require('@actions/core');
//const github = require('@actions/github');
const exec = require('@actions/exec');



function run() {
    console.log("Deploying to S3 using JavaScript action...");

    // 1) Get some input values
    // const bucket = core.getInput('bucket', { required: true });
    // const bucketRegion = core.getInput('bucket-region', { required: true });
    // const distFolder = core.getInput('dist-folder', { required: true });

    // core.notice(`Bucket: ${bucket}`);
    // core.notice(`Bucket Region: ${bucketRegion}`);
    // core.notice(`Distribution Folder: ${distFolder}`);

    

    // // 2) Upload files
    // const s3Uri = `s3://${bucket}/`;
    // exec.exec('echo', ['Uploading files to S3...']);
    // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);



    core.notice("This is a placeholder for S3 deployment logic.");

    // Add your deployment logic here
}

run();