from django.db import models


class Polution(models.Model):
    SO2 = models.FloatField()
    CO = models.FloatField()
    PM2_5 = models.FloatField()
    PM10 = models.FloatField()
    NO2 = models.FloatField()
    O3 = models.FloatField()
    AQI = models.FloatField()
    place = models.CharField(max_length=100)
    year = models.CharField(max_length=50)

    def __str__(self):
        return self.id


class HistoryClick(models.Model):
    content_type = models.CharField(max_length=20)
    first_data = models.IntegerField()


class CoByPosition(models.Model):
    position = models.CharField(max_length=255, primary_key=True)
    co = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        managed = False  # 不生成迁移文件
        db_table = 'co_by_position'  # 定义数据表名字

class AirQualityData(models.Model):
    province = models.CharField(max_length=20, primary_key=True)
    january = models.IntegerField()
    february = models.IntegerField()
    march = models.IntegerField()
    april = models.IntegerField()
    may = models.IntegerField()
    june = models.IntegerField()
    july = models.IntegerField()
    august = models.IntegerField()
    september = models.IntegerField()
    october = models.IntegerField()
    november = models.IntegerField()
    december = models.IntegerField()

    class Meta:
        managed = False  # 不生成迁移文件
        db_table = 'air_quality_data' # 设置对应的数据库表名


class AQI(models.Model):
    position = models.CharField(max_length=10, primary_key=True)
    SO2 = models.FloatField()
    CO = models.FloatField()
    PM25 = models.FloatField()
    PM10 = models.FloatField()
    NO2 = models.FloatField()
    O3 = models.FloatField()

    class Meta:
        managed = False  # 不生成迁移文件
        db_table = 'aqi'  # 定义数据表名字