# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{pkgs}: {
  # Which nixpkgs channel to use.
  channel = "stable-24.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.zulu
    pkgs.material-design-icons
    pkgs.bun
    pkgs.ruby
    pkgs.bundler # Corrected from your previous log, ensure this is bundler
    pkgs.jdk17
    pkgs.jdk21
    pkgs.gcc
    pkgs.gnumake
    pkgs.curl
    pkgs.android-tools 
  ];
  # Sets environment variables in the workspace
  env = {};
  # This adds a file watcher to startup the firebase emulators. The emulators will only start if
  # a firebase.json file is written into the user's directory
  services.firebase.emulators = {
    detect = true;
    projectId = "officia-x-1gnmhj";
    services = ["auth" "firestore"];
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "PKief.material-icon-theme"
      "amazonwebservices.amazon-q-vscode"
      "amazonwebservices.aws-toolkit-vscode"
      "anyscalecompute.anyscale-workspaces"
      "bradlc.vscode-tailwindcss"
      "Dart-Code.dart-code"
      "golang.go"
      "ms-vscode.js-debug"
      "PKief.material-icon-theme"
      "redhat.java"
      "redhat.vscode-yaml"
      "ritwickdey.LiveServer"
      "vscjava.vscode-gradle"
      "vscjava.vscode-java-debug"
      "vscjava.vscode-java-dependency"
      "vscjava.vscode-java-pack"
      "vscjava.vscode-java-test"
      "vscjava.vscode-maven"
      "msjsdiag.vscode-react-native"
      "react-native-directory.vscode-react-native-directory"
      "Tomi.xajssnippets"
      "Tomi.xasnippets"
      "swmansion.react-native-ide"
      "ms-python.debugpy"
      "ms-python.python"
    ];
    workspace = {
      onCreate = {
        default.openFiles = [
          "src/app/home/page.tsx"
        ];
      };
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npx" "next" "dev" "--port" "$PORT" "--hostname" "0.0.0.0"];
          manager = "web";
        };
      };
    };
  };
}
