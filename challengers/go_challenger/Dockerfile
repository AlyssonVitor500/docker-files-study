FROM golang:alpine AS builder

WORKDIR /go/src
COPY full_cycle_rocks.go .
RUN mkdir build \ 
    && go build full_cycle_rocks.go \
    && mv full_cycle_rocks ./build/

FROM scratch

COPY --from=builder /go/src/build .
ENTRYPOINT [ "./full_cycle_rocks" ]