# Build (Local)

```
go build -o pb/pocketbase
```

# Build Dockerfile (Linux)

```
env GOOS=linux go build main.go -o pb/pocketbase # builds for Linux
```

# Start (Local)

```
./pb/pocketbase serve
```

# TODO:

- dockerfile to copy go build
