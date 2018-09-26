To try the SDM Pack for Spring with an SDM and Atomist workspace, follow the steps below:

## Login (optionally request trial)

* Go to [app.atomist.com](https://app.atomist.com/)
* Login with your GitHub ID (if you already have an account) or request a trial
* Once your trial request has been approved, Login with your GitHub ID
* Choose a GitHub org to connect to Atomist (An org is required. It can be either a free public org or a paid private org. You can create an org on GitHub.com if you don't already have one.)

## Install the Atomist CLI

`$ npm install -g @atomist/cli@next`

## Create a 'spring' SDM 

```
$ atomist create sdm
? Type of SDM to Create (use arrow keys)
> spring
  blank
  spring to kubernetes
```

## Configure SDM for your workspace 

You will need your Atomist workspace ID and an APIKey for this.

Your workspace ID is located on the settings page:

<img width="600" alt="workspace-settings" src="https://user-images.githubusercontent.com/774714/46111450-0dd36800-c1b5-11e8-95a9-cbd974e6ea99.png">

<img width="1118" alt="workspace-id" src="https://user-images.githubusercontent.com/774714/46111470-1deb4780-c1b5-11e8-809c-cdc2055ba185.png">

To create a new API key:

<img width="403" alt="api-key-menu" src="https://user-images.githubusercontent.com/774714/46111486-30658100-c1b5-11e8-9f8a-b2a69ddd32df.png">

<img width="923" alt="gen-key" src="https://user-images.githubusercontent.com/774714/46111494-33f90800-c1b5-11e8-9e25-b7f4c9ed6657.png">

<img width="983" alt="new-key" src="https://user-images.githubusercontent.com/774714/46111504-38252580-c1b5-11e8-9ccb-f3ec15031ff8.png">

Now, you can run the config command and provide those parameters:

`$ atomist config`

## Start your SDM

`$ atomist start`

## Create a new project to see your SDM in action

In the command bar at the bottom of the page in app.atomist.com, run `create spring `

<img width="296" alt="screen shot 2018-09-26 at 17 58 16" src="https://user-images.githubusercontent.com/774714/46111679-e29d4880-c1b5-11e8-828d-a64539a5332d.png">

Provide the parameters requested and see the notifications in the Atomist web feed

<img width="1440" alt="screen shot 2018-09-25 at 11 25 12" src="https://user-images.githubusercontent.com/774714/46111734-08c2e880-c1b6-11e8-8dc5-fc850196ede6.png">
