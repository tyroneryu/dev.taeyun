---
title: 'Git #1 - 기본 개념과 명령어'
description: '분산 버전 관리 시스템 Git의 개념, Working Directory·Staging Area·Repository 3개 영역 구조, 그리고 init/add/commit/status/log/config 등 필수 기본 명령어를 정리한다.'
image: '/images/blog/portfolio-git.png'
tags: 'Git, Version Control, Repository, Commit, CLI'
created: '2024-01-15'
---


# Git 이란
- 분산 버전 관리 시스템이다.

# Git의 3개 영역
1. Working Directory
    - 현재 작업 중인 영역
2. Staging Area
    - 버전 관리를 위한 파일, 폴더를 선별하기 위한 임시 공간
3. Repository
    - 버전이 저장되는 공간

![git_basic](/asset/git_basic.png)

## Git 기본 명령어 정리
- `git init` : git 관리 영역으로의 선언
    - 주의 사항 : 이미 git으로 관리되는 영역 내부 폴더에서 다시 `git init`을 하지 말자! (submodule에 대한 내용으로 응용 등급이니 나중에 확인하자)
- `git add 파일명_혹은_경로` : Working Directory에서 작업한 파일이나 폴더를 Staging Area로 전달하는 명령어
전달의 이유는 commit을 찍기 위해(버전을 생성하기 위해)
- `git commit -m '커밋메세지'` : 실제 버전을 생성하는 명령어(커밋메세지는 의미있는 내용으로 작성하자)
- `git status` : 현재 git의 상태를 확인할 수 있는 명령어
    - untracked : 아직 관리된 적 없는 파일을 의미
    - modified : 관리되고 있는 파일이 수정된 경우
    - 붉은색 : Working Directory에서 파일이 변경되거나 생선된 경우
    - 초록색 : Staging Area에 위치한 파일의 경우
- `git log` : 현재 저장된 commit 히스토리를 알 수 있다.
    - `--oneline` : 해당 옵션은 commit 정보를 한 줄로 보여주는 옵션이다.
- `git config --global -1` : 현재 git 설정 정보(전체 설정)를 알 수 있다.
