FROM python:3.9.16-bullseye

COPY . .

ENV CLOUDINARY_URL=cloudinary://898819796268871:fD6sXkIAdXS5zEFpKy-0Y-Fy7O4@del5cxt4n
ENV PORT=5000

RUN pip install -r requirements.txt

EXPOSE 5000

CMD [ "python3", "main.py" ]