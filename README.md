# cloud-developer
This a cloud native application build on microservice architecture pattern. The initail Content for Udacity's cloud developer nanodegree. It is a conternarized application that's built to run on Kubernetes cluster

## Prerequisites
1. Install docker. For more information about Docker check https://docs.docker.com


2. How To Install Kubernetes On AWS
     . Setting Up Credentials  Creating Infrastructure: https://docs.aws.amazon.com/en_pv/eks/latest/userguide/getting-started.html
    
     . Installing Kubernetes
           Available alternatives:
              . kops - Kubernetes Operations https://github.com/kubernetes/kops
              . Amazon EKS https://aws.amazon.com/eks/ CLI https://github.com/weaveworks/eksctl
              . Kube-aws https://github.com/kubernetes-incubator/kube-aws


## Set up the project

1. To clone repository : git clone https://github.com/mununuzi/cloud-developer

2. npm run install

3. docker-compose -f course-03/exercises/udacity-c3-deployment/docker/docker-compose-build.yaml build --parallel 

4. Create deployments using *kubectl* 
     - kubectl apply -f backend-user-deployment.yaml
     - kubectl apply -f backend-feed-deployment.yaml
     - kubectl apply -f backend-reverseproxy-deployment.yaml
     - kubectl apply -f backend-frontend-deployment.yaml

5. Run services using *kubectl*
     - kubectl apply -f backend-user-service.yaml
     - kubectl apply -f backend-feed-service.yaml
     - kubectl apply -f backend-reverseproxy-service.yaml
     - kubectl apply -f backend-frontend-service.yaml


## Useful links
 Docker hub link to the project images:
    . https://hub.docker.com/repository/docker/blessedm/reverseproxy
    . https://hub.docker.com/repository/docker/blessedm/udacity-restapi-user
    . https://hub.docker.com/repository/docker/blessedm/udacity-restapi-feed
    . https://hub.docker.com/repository/docker/blessedm/udacity-frontend

 Amazon EKS : https://docs.aws.amazon.com/en_pv/eks/latest/userguide/getting-started.html

