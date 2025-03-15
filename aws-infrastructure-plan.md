## CodeBuild

- Pricing: Charged per build minute based on the selected compute type.
- Free Tier: 100 build minutes/month on the general1.small instance.

## CodePipeline

- Pricing: $1 per active pipeline per month.
- Estimate: With a single pipeline monitoring your GitHub monorepo, expect $1/month.
- Free Tier: 1 free V1 pipeline (monorepo we go), you also get 100 free action execution minutes for a V2 pipeline

## S3 Bucket

- Pricing:
  - Storage: $0.023 per GB/month.
  - Data Transfer: $0.09 per GB after the first 100GB/month.
- Estimate: Assuming 5GB storage and 50GB data transfer:
  - Storage: 5GB × $0.023 = $0.115/month.
  - Data Transfer: 50GB is within the free tier, so $0.

## CloudFront

- Pricing:

  - Free Tier: 1TB data transfer and 10 million HTTP/HTTPS requests per month.

- Estimate: If your usage stays within the free tier, $0/month.

## Lambda

- Pricing:
  - Free Tier: 1 million requests and 400,000 GB-seconds of compute time per month.
- Estimate: For a small API with moderate traffic, it's likely to remain within the free tier, resulting in $0/month.

## API Gateway

- Pricing: To be included

## Comprehend

- Pricing:
  - Free Tier: Amazon Comprehend offers a free tier covering 50K units of text (5M characters) per API per month.

## IAM

- Pricing: Free

## Route 53

- Pricing: To be included

## CDK (Cloud Development Kit)

- Pricing: Free

## AWS WAF

- Pricing: Free
