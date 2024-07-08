import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';


export class S3Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);

      const s3bucket = new s3.Bucket(this, 'aws-s3-csk',{
        bucketName: 'aws-s3-bucket-872024',
        versioned: true,
        eventBridgeEnabled: false,
        bucketKeyEnabled: false
      });
      cdk.Tags.of(s3bucket).add('Description', 'Deploying S3 Stack');
    }
  }
  