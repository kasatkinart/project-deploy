# etc/python/Dockerfile

FROM python:3.11

# Создаём рабочую директорию внутри контейнера
WORKDIR /app

# Копируем requirements
COPY requirements.txt .

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем исходники Django-проекта
COPY django_deploy_project/ .

# Открываем порт
EXPOSE 8000

# Команда по умолчанию
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
