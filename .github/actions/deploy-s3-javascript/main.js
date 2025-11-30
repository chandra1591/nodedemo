const core = require('@actions/core');
//const github = require('@actions/github');
//const exec = require('@actions/exec');

// Using AWS Account credentials from GitHub Secrets
// AWS_ACCESS_KEY_ID
// AWS_SECRET_ACCESS_KEY


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

    // 3) Set output values
    // 4) Website URL
    // const webUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    // core.notice(`Website URL: ${webUrl}`);
    // core.setOutput('website-url', webUrl);


    core.notice("This is a placeholder for S3 deployment logic.");

    // Add your deployment logic here
}

run();