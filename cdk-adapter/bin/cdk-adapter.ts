#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkAdapterStack } from '../lib/cdk-adapter-stack';

const app = new cdk.App();
new CdkAdapterStack(app, 'CdkAdapterStack', {
    env: { 
        account: process.env.ACCOUNT, 
        region: process.env.REGION,
      },
      serverPath: process.env.SERVER_PATH!,
      staticPath: process.env.STATIC_PATH!,
});
