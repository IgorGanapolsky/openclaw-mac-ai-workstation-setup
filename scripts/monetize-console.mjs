import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

async function monetizeConsole() {
  const repo = 'IgorGanapolsky/openclaw-console';
  const branchName = `monetize-managed-setup-${Date.now()}`;
  const baseBranch = 'develop';

  try {
    console.log(`Fetching head SHA of ${baseBranch}...`);
    const baseSha = execSync(`unset GITHUB_TOKEN && gh api repos/${repo}/git/ref/heads/${baseBranch} --jq ".object.sha"`).toString().trim();

    console.log(`Creating branch ${branchName}...`);
    execSync(`unset GITHUB_TOKEN && gh api repos/${repo}/git/refs -f ref="refs/heads/${branchName}" -f sha="${baseSha}"`);

    console.log('Fetching README SHA on new branch...');
    const readmeSha = execSync(`unset GITHUB_TOKEN && gh api repos/${repo}/contents/README.md?ref=${branchName} --jq ".sha"`).toString().trim();

    console.log('Reading new content...');
    const content = readFileSync('/tmp/new_readme.md', 'utf8');
    const contentB64 = Buffer.from(content).toString('base64');

    const payload = {
      message: "Add Professional Managed Setup link",
      content: contentB64,
      sha: readmeSha,
      branch: branchName
    };
    writeFileSync('/tmp/readme_payload.json', JSON.stringify(payload));

    console.log('Pushing README update...');
    execSync(`unset GITHUB_TOKEN && gh api -X PUT repos/${repo}/contents/README.md --input /tmp/readme_payload.json`);

    console.log('Creating Pull Request...');
    const prPayload = {
      title: "Add Professional Managed Setup monetization link",
      body: "Linking the OpenClaw Console to the $1,500 Managed Revenue System offer as part of the monetization pivot.",
      head: branchName,
      base: baseBranch
    };
    writeFileSync('/tmp/pr_payload.json', JSON.stringify(prPayload));
    const prResponse = execSync(`unset GITHUB_TOKEN && gh api repos/${repo}/pulls --input /tmp/pr_payload.json`).toString();
    const prUrl = JSON.parse(prResponse).html_url;

    console.log('Successfully created PR:', prUrl);
  } catch (e) {
    console.error('Operation failed:', e.message);
    if (e.stdout) console.error(e.stdout.toString());
    if (e.stderr) console.error(e.stderr.toString());
  }
}

monetizeConsole();
